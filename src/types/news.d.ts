export declare module News {
  type GetData = {
    id: number
    public: boolean
    title: string
    rendered_contents: string
    text_contents: string
    created_at: string
    updated_at: string
  }

  type GetResponse = GetData[]
}
