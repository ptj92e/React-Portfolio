import axios from "axios";

export default {
    sendEmail: function(emailData) {
        return axios.post("/send", emailData);
    }
};