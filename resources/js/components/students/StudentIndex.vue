<template>

   <div class="w-full bg-gray-100">
       <div class="flex justify-between py-4 px-2">
           <h3 class="text-xl font-semibold">Student List</h3>
           <router-link :to="{name:'student.create'}" class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" >Add Student</router-link>
       </div>
      <table class="table-auto">
         <thead>
            <tr class="space-x-8">
               <th class="p-2">Serial No</th>
               <th class="p-2">Name</th>
               <th class="p-2">Email</th>
               <th class="p-2">Department</th>
               <th class="p-2">Roll</th>
               <th class="p-2">Action</th>
            </tr>
         </thead>
         <tbody>
               <tr v-for="(student, index) in students" :key="student.id" class="">
                  <td class="pt-4 text-center border p-2">{{index + 1}} </td>
                  <td class="pt-4 text-center border p-2">{{student.name}}</td>
                  <td class="pt-4 text-center border p-2">{{student.email}}</td>
                  <td class="pt-4 text-center border p-2">{{student.department}}</td>
                  <td class="pt-4 text-center border p-2">{{student.roll}}</td>
                  <td class="pt-4 text-center border p-2">
                     <div class="flex gap-x-1">
                        <router-link :to="{name:'student.edit', params:{id: student.id}}" class="px-4 text-indigo-600 bg-grey-500 p-1">Edit</router-link>
                        <button type="button" class="bg-red-500 text-red-600" @click="destroyStudent(student.id)">Delete</button>
                     </div>
                  </td>
               </tr>
         </tbody>
      </table>
   </div>
</template>

<script>
    import useStudent from '../../resueable/student';
    import {onMounted} from 'vue';

    export default {
        name: "StudentIndex",

        setup(){
            const {students, getStudents, deleteStudent} = useStudent();
            onMounted(getStudents);
            //delete student
            const destroyStudent = async (id) => {
                if (confirm('are you sure?')){
                    await deleteStudent(id);
                    await getStudents();
                }
            };
            return {
                students,
                destroyStudent,
            }
        }
    }
</script>

<style scoped>

</style>