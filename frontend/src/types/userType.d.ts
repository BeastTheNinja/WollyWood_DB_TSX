// User authentication response type
export interface UserData {
    access_token: string  // JWT token for authentication
    user: UserClass       // User profile information
    created: string       // Timestamp of when session was created
}

// User profile information
export interface UserClass {
    id: string
    firstname: string
    lastname: string
}