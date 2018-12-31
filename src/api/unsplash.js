import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 740b3a1ab2ef55b0d84398d6d45ac3761cea5d410bbefb4573f102655aba7d67'
  }
})
