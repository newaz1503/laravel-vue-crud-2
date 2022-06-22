<template>
    <div v-if="errors !=='' " class="text-red-600 mr-2">
        {{errors}}
    </div>
    <div class="w-full">
        <div class="flex justify-between py-4 px-2">
            <h3 class="text-xl font-semibold">Create New Student</h3>
            <router-link :to="{name:'student.index'}" class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Back</router-link>
        </div>
        <form class="w-full max-w-sm" @submit.prevent="CreateStudent">
            <div class="md:flex md:items-center mb-4">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Full Name
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Enter full name" v-model="form.name">
                </div>
            </div>
            <div class="md:flex md:items-center mb-4">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name1">
                        Email
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name1" type="email" placeholder="Enter email" v-model="form.email">
                </div>
            </div>
            <div class="md:flex md:items-center mb-4">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name2">
                        Department
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name2" type="text" placeholder="Enter Department name" v-model="form.department">
                </div>
            </div>
            <div class="md:flex md:items-center mb-4">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name3">
                        Roll
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name3" type="number" placeholder="Enter Roll" v-model="form.roll">
                </div>
            </div>

            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                    <button class="shadow bg-gray-800 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Create
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import useStudents from '../../resueable/student'
    import { reactive } from 'vue';
    export default {
        name: "StudentCreate",

        setup(){
           const form = reactive({
               'name': '',
               'email': '',
               'department': '',
               'roll': '',
            });

           const {errors, storeStudent } = useStudents();

            const CreateStudent = async() => {
                await storeStudent({...form});
            };

            return {
                form,
                CreateStudent,
                errors
            }
        }
    }
</script>

<style scoped>

</style>