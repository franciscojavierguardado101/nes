<template>
<div class="container">
    <b-form @submit="onSubmit" v-if="show">
        <b-form-group
            id="input-group-1"
            label="Title:"
            label-for="input-1"
        >
            <b-form-input
                id="input-1"
                v-model="form.title"
                type="text"
                required
                placeholder="Enter Post Title"
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Description:" label-for="input-2">
            <b-form-textarea
                id="input-2"
                v-model="form.description"
                placeholder="Enter description..."
                rows="3"
                max-rows="6"
            ></b-form-textarea>
        </b-form-group>

        <b-form-group id="input-group-3" label="Image Url:" label-for="input-3">
            <b-form-input
                type="url"
                id="input-3"
                v-model="form.image"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Do you have a social media link?" label-for="input-4"></b-form-group>
        <b-form-checkbox
            id="input-4"
            v-model="form.social"
            name="checkbox-1"
            value="true"
            unchecked-value="false">
        </b-form-checkbox>

        <b-form-group id="input-group-5" label="Social Media Url:" label-for="input-5" v-show="form.social">
            <b-form-input
                type="url"
                id="input-5"
                v-model="form.socialLink"
            ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
</div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    title: '',
                    description: '',
                    image:'',
                    social:'',
                    socialLink:'',
                },
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
               axios.post('post/create',{
                   title:this.form.title,
                   description:this.form.description,
                   image:this.form.image,
                   socialLink:this.form.socialLink,
               }).then(function (response) {
                       console.log(response);
                   })
                   .catch(function (error) {
                       console.log(error);
                   });
            },
        }
    }
</script>

<style scoped>

</style>
