export interface BasicFormTypes{
    name:string,
    job:string,
    phone:number,
    email:string,
    summary:string
}

export type ExperienceFormType = {
    company_name: string;
    job_role: string;
    start_date: string;
    end_date: string;
    job_summary: string;
}

export type ProjectsFormType = {
    name: string;
    live_url: string;
    git_url: string;
    details: string;
}