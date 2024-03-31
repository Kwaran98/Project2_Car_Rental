import axios from 'axios';

const URL = 'https://car-api2.p.rapidapi.com/api/models?sort=id&direction=asc&year=2020&verbose=yes'

const options = {
  headers: {
    'X-RapidAPI-Key': 'edf06044a2msh7ae1f11e4ad8708p1e0e36jsnd8bd11804a58',
    'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
  }
};


export const getCarData = async () => {
    try {
        const { data: { data }} = await axios.get(URL, options);
        
        return data;
    }

    catch(error){
        console.log(error)
    }
}
