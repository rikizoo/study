export interface Story  {
    id: number
    by: string
    title: string
    url: string
}

export interface TabTypes{
    value:string
    setValue:React.Dispatch<React.SetStateAction<string>>
}