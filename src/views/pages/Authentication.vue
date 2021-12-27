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
                <div class="user-form-category-btn">
                    <ul class="nav nav-tabs">
                        <li><a href="#login-tab" class="nav-link active" data-toggle="tab">sign in</a></li>
                        <li><a href="#register-tab" class="nav-link" data-toggle="tab">sign up</a></li>
                    </ul>
                </div>

                <div class="tab-pane active" id="login-tab">
                    <div class="user-form-title">
                        <h2>Welcome!</h2>
                        <p>Use credentials to access your account.</p>
                    </div>
                    <form>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <input type="text" v-model="emailx" class="form-control" placeholder="Email">
                                    <small class="form-alert">Please enter your registered email</small>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group">
                                    <input type="password" v-model="passwordx" class="form-control" id="pass" placeholder="Password">
                                    <button type="button" class="form-icon"><i class="eye fas fa-eye"></i></button>
                                    <small class="form-alert">Password must be 6 characters</small>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="signin-check">
                                        <label class="custom-control-label" for="signin-check">Remember me</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group text-right">
                                    <a href="#" class="form-forgot">Forgot password?</a>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group">
                                    <button @click="login()" class="btn btn-inline">
                                        <i class="fas fa-unlock"></i>
                                        <span>Enter your account</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="user-form-direction">
                        <p>Don't have an account? click on the <span>( sign up )</span> button above.</p>
                    </div>
                </div>

                <div class="tab-pane" id="register-tab">
                    <div class="user-form-title">
                        <h2>Register</h2>
                        <p>Setup a new account in a minute.</p>
                    </div>
                  
                   
                    <form>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <input type="text" class="form-control" v-model="name" placeholder="Fullname">
                                    <small class="form-alert">Enter your fullname</small>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group">
                                    <input type="text" class="form-control" v-model="email" placeholder="Email Address">
                                    <small class="form-alert">Email</small>
                                </div>
                            </div>
                          
                            <div class="col-12">
                                <div class="form-group">
                                    <input :type="passwordAttribute" v-model="password" class="form-control" placeholder="Create a Password">
                                    <button class="form-icon"><i class="eye fas fa-eye"></i></button>
                                    <small class="form-alert">Password must be 6 characters</small>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group">
                                    <input :type="passwordAttribute" class="form-control" placeholder="Confirm your password">
                                    <small class="form-alert">Password must be 6 characters</small>
                                </div>
                            </div>
                            
                            <div class="col-12">
                                <div class="form-group">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="signup-check">
                                        <label class="custom-control-label" for="signup-check">I agree to the all <a href="#">terms & consitions</a> of bebostha.</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group">
                                    <button @click="register()" class="btn btn-inline">
                                        <i class="fas fa-user-check"></i>
                                        <span>Create new account</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="user-form-direction">
                        <p>Already have an account? click on the <span>( sign in )</span> button above.</p>
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
             email: '',
             emailx: '',
            //  username: '',
             password: '',
             passwordx: '',             
             role: '',
             passwordAttribute: 'password'
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
        login() {
                        // alert('start')
                let loader = this.$loading.show({
                    // Optional parameters
                    container: this.fullPage ? null : this.$refs.formContainer,
                    canCancel: true,
                    onCancel: this.onCancel,
                    color: '#6CC3EC',
                });

                    setTimeout(() => {
                        loader.hide()
                    }, 5000)

                  
                  this.axios({
                      method: 'post',
                      url: 'http://localhost:9999/api/login',
                       data: {
                            email: this.emailx,
                            password: this.passwordx
                        },
                  })
                  .then((response)=>{
  

                      console.log(response)
                    if (response.data.user_data) {
                
                        localStorage.setItem('user_role', response.data.user_role)
                        localStorage.setItem('user_data', JSON.stringify(response.data.user_data))
                   
                        loader.hide()
                        toast.success('Login Successful');

                     return this.$router.push('/home')
                     
                    
                    }else{

                        this.$router.push('/login');
                        toast.error('Invalid Credentials');

                    }
                        
                    })
                  .catch((response)=>{
                      console.log(response)
                  })  


            },
        register() {


                        let loader = this.$loading.show({
                            // Optional parameters
                            container: this.fullPage ? null : this.$refs.formContainer,
                            canCancel: true,
                            onCancel: this.onCancel,
                            color: '#6CC3EC',
                        });
                       this.axios({
                                method: "post",
                                url: 'http://localhost:9999/api/registerx',
                                data: {
                                    name: this.name,
                                    email: this.email,
                                    password: this.password
                                },
                                headers: {
                                    'Access-Control-Allow-Origin': '*',
                                    'Content-type': 'application/json',
                                    'Accept': 'application/json',
                                },
                                
                                })
                                .then( (response) =>{
                                    //handle success

                                    console.log(response)

                                    localStorage.setItem('user_role', response.data.user_data.role)
                                    localStorage.setItem('user_token', response.data.access_token)
                                    localStorage.setItem('user_data', JSON.stringify(response.data.user_data))

                                    
                                    loader.hide()

                                     toast.success('Login Successful');

                                    return this.$router.push('/verify')

                                })
                                .catch( (response)=> {

                                    // alert(response);
                                    //handle error
                                    console.log(response);

                                   toast.error('Invalid Credentials');

                                    loader.hide()

                                });
            
                  
                    },
        onCancel() {
                console.log('User cancelled the loader.')
                // loader.hide()
            }
    },
    
}
</script>

