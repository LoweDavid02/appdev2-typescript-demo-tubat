(() => {
    // Literal Types (Alternative to Enum)
    let userRole: 'admin' | 'guest' | 'teacher' | 'student' = 'teacher'

    userRole = 'guest'
    // anotherUserRole = 'superadmin'

    function access(role: 'admin' | 'guest' | 'teacher' | 'student') {
        // ...
    }
})