<template>
    <div>
        <input
            placeholder="Enter name"
            type="text"
            id="name"
            class="form-control"
            :class="$v.form.name.$error ? {'is-invalid' : $v.form.name.$error} : {'is-valid' : !$v.form.name.$invalid}"
            @blur="$v.form.name.$touch()"
            v-model.trim="$v.form.name.$model"
        >
    </div>
</template>

<script>
export default {
  name: 'Input'
}
</script>

<style scoped>

</style>
