<template>
    <div class="w-full">
        <div class="flex justify-between py-4 px-2">
            <h3 class="text-xl font-semibold">Edit Student</h3>
            <router-link :to="{name:'student.index'}" class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Back</router-link>
        </div>
        <form class="w-full max-w-sm" @submit.prevent="UpdateStudent">
            <div class="md:flex md:items-center mb-4">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Full Name
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Enter full name" v-model="student.name">
                </div>
            </div>
            <div class="md:flex md:items-center mb-4">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name1">
                        Email
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name1" type="email" placeholder="Enter email" v-model="student.email">
                </div>
            </div>
            <div class="md:flex md:items-center mb-4">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name2">
                        Department
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name2" type="text" placeholder="Enter Department name" v-model="student.department">
                </div>
            </div>
            <div class="md:flex md:items-center mb-4">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name3">
                        Roll
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name3" type="number" placeholder="Enter Roll" v-model="student.roll">
                </div>
            </div>

            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                    <button class="shadow bg-gray-800 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Update
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import useStudents from '../../resueable/student';
    import { onMounted } from 'vue';
    export default {
        name: "StudentCreate",

        props: {
            id: {
                required: true,
                type: String,
            }
        },

        setup(props){

            const { student, getStudent, updateStudent } = useStudents();

            onMounted(getStudent(props.id));
            //update student
            const UpdateStudent = async () => {
                  await updateStudent(props.id);
            };
            return {
                student,
                getStudent,
                UpdateStudent
            }
        }
    }
</script>

<style scoped>

</style>