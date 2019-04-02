
<script>
import { required, minLength, maxLength, numeric } from 'vuelidate/lib/validators'
import PrototypeAction from '@/components/prototype/ActionCreate'

const isPhone = (value) => value.match('^[0-9 +]*$') !== null

export default {
  extends: PrototypeAction,
  data () {
    return {
      dataURL: 'authors',
      breadcrumb: [
        {
          text: 'Home',
          href: '#/'
        },
        {
          text: 'Authors',
          href: '#/authors/list'
        },
        {
          text: 'Create',
          active: true
        }
      ],
      form: {
        name: '',
        age: '',
        phone: ''
      }
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(1)
      },
      age: {
        required,
        minLength: minLength(1),
        numeric
      },
      phone: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(12),
        isPhone
      }
    }
  },
  methods: {
    AddPlus () {
      if (!this.form.phone.length) {
        this.form.phone = '+'
      }
    }
  }
}
</script>

<template>
 <div class="row justify-content-center">
     <form v-if="showForm" class="col-5">
         <div class="form-group">
             <div class="text-center">
                 <label for='name'>Author name:</label>
                 <input
                     placeholder="Enter name"
                     type="text"
                     id="name"
                     class="form-control"
                     :class="{ 'is-invalid' : $v.form.name.$error }"
                     @blur="$v.form.name.$touch()"
                     v-model.trim="$v.form.name.$model"
                 >
                 <div class="invalid-feedback" v-if="!$v.form.name.minLength">Alert! Min length</div>
                 <div class="invalid-feedback" v-if="!$v.form.name.required">Alert! Required</div>
             </div>
         </div>
         <div class="form-group">
             <div class="text-center pt-3">
                 <label for="age">Author age:</label>
                 <input
                     placeholder="Enter age"
                     type="text"
                     id="age"
                     class="form-control"
                     :class="{ 'is-invalid' : $v.form.age.$error }"
                     @blur="$v.form.age.$touch()"
                     v-model.trim="$v.form.age.$model"
                 >
                 <div class="invalid-feedback" v-if="!$v.form.age.numeric">Alert! Integer</div>
                 <div class="invalid-feedback" v-if="!$v.form.age.minLength">Alert! Min length</div>
                 <div class="invalid-feedback" v-if="!$v.form.age.required">Alert! Required</div>
             </div>
         </div>
         <div class="form-group">
             <div class="text-center pt-3">
                 <label for="phone">Author phone:</label>
                 <input
                     placeholder="Enter phone"
                     type="text"
                     id="phone"
                     @click="AddPlus"
                     class="form-control"
                     :class="{ 'is-invalid' : $v.form.phone.$error }"
                     @blur="$v.form.phone.$touch()"
                     v-model.trim="$v.form.phone.$model"
                 >
                 <div class="invalid-feedback" v-if="!$v.form.phone.minLength">Alert! Min length</div>
                 <div class="invalid-feedback" v-if="!$v.form.phone.maxLength">Alert! Max length</div>
                 <div class="invalid-feedback" v-if="!$v.form.phone.required">Alert! Required</div>
                 <div class="invalid-feedback" v-if="!$v.form.phone.isPhone">Alert! integer</div>
             </div>
         </div>
             <b-button
                 v-if="!$v.form.name.$invalid && !$v.form.age.$invalid && !$v.form.phone.$invalid "
                 class="mt-4 col-3"
                 variant="success"
                 @click="onSubmit"
             >
                 Submit
             </b-button>
             <b-button
                 v-else
                 class="mt-4 col-3"
                 variant="success"
                 disabled
             >
                 Submit
             </b-button>
     </form>
     <b-alert show v-if="resultStatus.label==='E:SUCCESS:CREATE'" :variant="resultStatus.class">{{$t('responseMessages.E:SUCCESS:CREATE')}}</b-alert>
     <div class="col-12" v-if="resultStatus.label==='E:SUCCESS:CREATE' && !showForm">
       <b-button
         class="mt-4 col-3"
         variant="success"
         @click="resetForm"
       >
         Add more
       </b-button>
       <b-button
         class="mt-4 col-3"
         variant="warning"
         href="#/authors/list"
       >
         List
       </b-button>
     </div>
   </div>
</template>

<style>
    .row {
        margin-right: 0;
    }
</style>
