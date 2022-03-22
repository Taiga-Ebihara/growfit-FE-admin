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

  type PostRequest = {
    public: boolean
    title: string
    rendered_contents: string
  }

  type PatchRequest = {
    public?: boolean
    title?: string
    rendered_contents?: string
  }

  type GetResponse = GetData[]

  type FindResponde = GetData

  type PostResponse = {
    messade: string
  }

  type PatchResponse = {
    messade: string
  }

  type DeleteResponse = {
    messade: string
  }
}
