
<script>
import { required, minLength, alphaNum, maxLength, integer } from 'vuelidate/lib/validators'
import PrototypeAction from '@/components/prototype/ActionCreate'

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
        minLength: minLength(5),
        alphaNum
      },
      age: {
        required,
        minLength: minLength(1),
        integer
      },
      phone: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
        integer
      }
    }
  }
}
</script>

<template>
    <div class="row justify-content-center">
        <form class="col-5">
            <div class="form-group">
                <div class="text-center">
                    <label for='name'>Author name:</label>
                    <input
                        placeholder="Enter name"
                        type="text"
                        id="name"
                        class="form-control"
                        :class="$v.form.name.$error ? {'is-invalid' : $v.form.name.$error} : {'is-valid' : !$v.form.name.$invalid}"
                        @blur="$v.form.name.$touch()"
                        v-model.trim="$v.form.name.$model"
                    >
                    <div class="invalid-feedback" v-if="!$v.form.name.minLength">Alert! Min length</div>
                    <div class="invalid-feedback" v-if="!$v.form.name.alphaNum">Alert! Alpha num</div>
                    <div class="invalid-feedback" v-if="!$v.form.name.required">Alert! Required</div>
                </div>
                <div class="text-center pt-3">
                    <label for="age">Author age:</label>
                    <input
                        placeholder="Enter age"
                        type="text"
                        id="age"
                        class="form-control"
                        :class="$v.form.age.$error ? {'is-invalid' : $v.form.age.$error} : {'is-valid' : !$v.form.age.$invalid}"
                        @blur="$v.form.age.$touch()"
                        v-model.trim="$v.form.age.$model"
                    >
                    <div class="invalid-feedback" v-if="!$v.form.age.integer">Alert! Integer</div>
                    <div class="invalid-feedback" v-if="!$v.form.age.minLength">Alert! Min length</div>
                    <div class="invalid-feedback" v-if="!$v.form.age.required">Alert! Required</div>
                </div>
                <div class="text-center pt-3">
                    <label for="age">Author phone:</label>
                    <input
                    placeholder="Enter phone"
                    type="text"
                    id="phone"
                    class="form-control"
                    :class="$v.form.phone.$error ? {'is-invalid' : $v.form.phone.$error} : {'is-valid' : !$v.form.phone.$invalid}"
                    @blur="$v.form.phone.$touch()"
                    v-model.trim="$v.form.phone.$model"
                >
                    <div class="invalid-feedback" v-if="!$v.form.phone.minLength">Alert! Min length</div>
                    <div class="invalid-feedback" v-if="!$v.form.phone.maxLength">Alert! Max length</div>
                    <div class="invalid-feedback" v-if="!$v.form.phone.required">Alert! Required</div>
                    <div class="invalid-feedback" v-if="!$v.form.phone.integer">Alert! Integer</div>
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
            </div>
        </form>
    </div>
</template>

<style>
    .row {
        margin-right: 0;
    }
</style>
