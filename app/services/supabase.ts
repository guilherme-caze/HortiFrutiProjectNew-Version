import axios from "axios"


const supabase = axios.create({
    baseURL: 'https://nmjxijgyzikakmypmkff.supabase.co/rest/v1',
    headers: {
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tanhpamd5emlrYWtteXBta2ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NDg4NjYsImV4cCI6MjA2NTIyNDg2Nn0.YtTLVnEIBW6IZdO_8daRL2QvsyoIVD2IsuU-fDmwISo'
    }
});

export default supabase;