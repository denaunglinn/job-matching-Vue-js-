import axios from "axios";

export default {
    name:'HomePage',
    data () {
        return {
            searchKey : '',
            postLists : [],
            categoryLists : [],
        }
    },
    methods: {
        searchPost(){
            let search = {
                key : this.searchKey,
            };
            axios.post('http://job_match.local/api/post/search',search).then((response) => {
                this.postLists=response.data.data;
            });
        },
        getPostLists() {
            axios.post('http://job_match.local/api/post/lists').then((response) => {
                this.postLists=response.data.data;
            });
        },
        getCategoryLists(){
            axios.post('http://job_match.local/api/category/lists').then((response) => {
                this.categoryLists=response.data.data;
            });

        },
        categorySearch(searchKey){
            let search = {
                key : searchKey,
            };
            axios.post('http://job_match.local/api/category/search',search).then((response) => {
                this.postLists=response.data.data;
            });
        }
    },
    mounted () {
        this.getPostLists();   
        this.getCategoryLists();       
    },
}