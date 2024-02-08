import react from 'react'
import dashboard from "../../images/dashboard.svg"
import upload from "../../images/upload.svg"
import settings from "../../images/settings.svg"
import calender from "../../images/calender.svg"
import invoice from "../../images/invoice.svg"
import schedule from "../../images/schedule.svg"
import notification from "../../images/notification.svg"
const sidebarData = [
    {
        title:"Dashboard",
        src:dashboard,
        link:"/dashboard",
    },
    {
        title:"Upload",
        src:upload,
        link:"/upload",
    },
    {
        title:"Invoice",
        src:invoice, 
    }, 
    {
        title:"Schedule",
        src:schedule, 
    }, 
    {
        title:"Calender",
        src:calender,
    }, 
    {
        title:"Notifications",
        src:notification, 
    }, 
    {
        title:"Settings",
        src:settings, 
    }, 

]
export default sidebarData;
