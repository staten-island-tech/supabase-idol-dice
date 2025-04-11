<template>
    <div>
      <input v-model="inputData" placeholder="Enter data" />
      <h4 @click="submitData">Submit</h4>
      <div id="chart"></div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { supabase } from '../lib/supabaseClient.js'
  
  export default {
    setup() {
      const inputData = ref('');
  
      const submitData = async () => {
          if (inputData.value == '' || inputData.value == ' '){
              console.log("Aint nothing there brah")
          }
        else {
        // Insert data into Supabase
        const { error } = await supabase
          .from('instruments') // Replace with your table name
          .insert([{ name: inputData.value }]); // Replace with your column name
  
        if (error) {
          console.error('Error inserting data:', error);
        } else {
          updateChart(); // Call function to update the chart
        }
        inputData.value = ""
    }
      };
  
      const updateChart = () => {
        // Logic to fetch updated data from Supabase and redraw the chart
        // This will depend on the charting library you are using
      };
  
      return {
        inputData,
        submitData,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles you need here */
  </style>