import {ref} from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default function useStudent() {

    const students = ref([]);
    const student = ref([]);
    const errors = ref('');

    const router = useRouter();

    //student retrieve
    const getStudents = async () => {
        let result = await axios.get('/api/students');
        students.value = result.data.data;
    };
    //student store
    const storeStudent = async(data) => {
        errors.value = '';
        try {
            await axios.post('/api/students', data);
            await router.push({name: 'student.index'});
        }catch(e){
            if (e.response.status === 422){
                for (let key in e.response.data.errors){
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    };
    //student edit
    const getStudent = async (id) => {
        let result = await axios.get('/api/students/'+id);
        student.value = result.data.data;
    };
    //student update
    const updateStudent = async(id) => {
        try {
            await axios.put('/api/students/'+id, student.value);
            await router.push({name: 'student.index'});
        }catch (e) {
            console.log(e.message)
        }
    };
    //delete student
    const deleteStudent = async (id) => {
        await axios.delete('/api/students/'+id)
    };

    return{
        students,
        getStudents,
        deleteStudent,
        storeStudent,
        getStudent,
        student,
        updateStudent,
        errors
    }
}