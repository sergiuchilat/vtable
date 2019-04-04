
<script>
import { required, minLength, maxLength, numeric } from 'vuelidate/lib/validators'
import PrototypeAction from '@/components/prototype/ActionCreate'
import AlertMessage from '@/components/widgets/AlertMessage'

const isPhone = (value) => value.match('^[0-9 +]*$') !== null

export default {
  components: { AlertMessage },
  extends: PrototypeAction,
  data () {
    return {
      dataURL: 'authors',
      form: {
        name: '',
        age: '',
        phone: ''
      },
      rules: {
        phone: [
          () => this.$v.form.phone.required || 'This field is required',
          () => this.$v.form.phone.minLength || 'Min length 11 characters',
          () => this.$v.form.phone.maxLength || 'Max length 11 characters'
        ],
        age: [
          () => this.$v.form.age.required || 'This field is required',
          () => this.$v.form.age.minLength || 'Min length 1 characters',
          () => this.$v.form.age.numeric || 'Only number'
        ],
        name: [
          () => this.$v.form.name.required || 'This field is required',
          () => this.$v.form.name.minLength || 'Min length 3 characters'
        ]
      }
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      age: {
        required,
        minLength: minLength(1),
        numeric
      },
      phone: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
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
  <v-layout justify-center>
     <v-flex v-if="showForm" xs3>
         <v-text-field
              label="Enter Name"
             type="text"
             id="name"
             :class="{ 'is-invalid' : $v.form.name.$error }"
             @blur="$v.form.name.$touch()"
             v-model.trim="$v.form.name.$model"
              :rules="rules.name"
         ></v-text-field>
           <v-text-field
               label = "Enter age"
               type="text"
               id="age"
               :class="{ 'is-invalid' : $v.form.age.$error }"
               @blur="$v.form.age.$touch()"
               v-model.trim="$v.form.age.$model"
               :rules="rules.age"
           ></v-text-field>
           <v-text-field
              label = "Enter phone"
               type="text"
               id="phone"
               @click="AddPlus"
               :class="{ 'is-invalid' : $v.form.phone.$error }"
               @blur="$v.form.phone.$touch()"
               v-model.trim="$v.form.phone.$model"
              :rules="rules.phone"
           ></v-text-field>
       <v-btn
           v-if="!$v.form.name.$invalid && !$v.form.age.$invalid && !$v.form.phone.$invalid "
           color="success"
           @click="onSubmit"
           block
       >
         Submit
       </v-btn>
       <v-btn
           v-else
           color="success"
           disabled
           block
       >
         Submit
       </v-btn>
     </v-flex>
   <AlertMessage :label="resultStatus.label" :alertClass="resultStatus.class" v-if="resultStatus.label!==''"/>
   <div class="col-12" v-if="resultStatus.label==='success.create' && !showForm">
     <v-btn
       color="success"
       @click="resetForm"
     >
       Add more
     </v-btn>
   </div>
  </v-layout>
</template>

<style>
    .row {
        margin-right: 0;
    }

  .success{
    font-size: 18px;
  }
</style>
