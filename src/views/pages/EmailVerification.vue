<template>
    <div>

                <!--=====================================
                    USER-FORM PART START
        =======================================-->
        <section class="user-form-part">
            <div class="user-form-banner">
                <div class="user-form-content">
                    <a href="#"><img src="https://legitcar.phoenixgn.com/legit_car.png" alt="logo"></a>
                    <h1>Advertise your cars <span>Buy your dream car.</span></h1>
                    <p>Biggest Online Marketplace in the World, for verified vehicles.</p>
                </div>
            </div>

            <div class="user-form-category">
                <div class="user-form-header">
                    <a href="#"><img src="https://legitcar.phoenixgn.com/legit_car2.png" alt="logo"></a>
                    <a href="index.html"><i class="fas fa-arrow-left"></i></a>
                </div>
                

                <div class="tab-pane active pt-5" id="login-tab">
                    <div class="user-form-title pt-5">
                        <h4 class="pt-5">Verify Email!</h4>
                        <p>Enter the OTP sent to your mail</p>
                    </div>
              
                        <div class="row">
                            
                            <div class="col-12">
                                <div class="form-group">
                                    <input type="password" maxlength="6" style="line-spacing: 3em;" v-model="otp" class="form-control text-center" id="pass" placeholder="Enter OTP">
                                 
                                </div>
                            </div>
                            
                            
                            <div class="col-12">
                                <div class="form-group">
                                    <button @click="verify_otp()" class="btn btn-inline">
                                        <i class="fas fa-unlock"></i>
                                        <span>Submit</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                  
                   
                </div>

            </div>
        </section>
        <!--=====================================
                    USER-FORM PART END
        =======================================-->

        
        <!--=====================================
                    JS LINK PART START
        =======================================-->
        <!-- FOR BOOTSTRAP -->
        
    </div>
</template>
<script>
import { useToast } from 'vue-toastification'

const toast = useToast()

export default {

    data() {
        return {
             fullPage: false,
             otp: '',
        }
    },

    methods: {

        togglePasswordVisibility(){
       
            if(this.passwordAttribute == 'password'){
                this.passwordAttribute = 'text'
            }else{
                this.passwordAttribute = 'password'
            }

        },
       verify_otp(){

            // alert(localStorage.getItem('access_token'))

                let loader = this.$loading.show({
                  // Optional parameters
                  container: this.fullPage ? null : this.$refs.formContainer,
                  canCancel: true,
                  color: '#7367F0',
                  loader: 'dots',
                  onCancel: this.onCancel,
                });

              
                // // simulate AJAX
                // setTimeout(() => {
                //   loader.hide()
                // },5000) 

                this.axios({
                    method: "post",
                    url: "http://localhost:9999/api/verify_otp",
                    data: {
                        otp: this.otp,
                    },
                    headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                },
                })
                .then((response)=>{
                    
                    console.log(response)

                    

                    //  this.$router.push('/user/home')

                    localStorage.setItem('user_role', response.data.user_data.role)
                    localStorage.setItem('user_token', response.data.access_token)
                    localStorage.setItem('user_data', JSON.stringify(response.data.user_data))

                    if (response.data.user_data.role == 'admin') {

                        loader.hide()

                         toast.success('Email Verified');

                        return this.$router.push('/home')

                    }if(response.data.user_data.role == 'user'){

                        loader.hide()

                       toast.success('Email Verified');

                        return this.$router.push('/home')

                    }else{

                        toast.error('An error has occured');

                        return this.$router.push('/verify')
                    }

                })
                .catch((response)=>{
                    
                      loader.hide()
                        
                        toast.error('Invalid Credentials');

                         console.log(response)

                        return this.$roter.push('/login')
                

                })

                


           

        },
        onCancel() {
                console.log('User cancelled the loader.')
                // loader.hide()
            }
    },
    
}
</script>

