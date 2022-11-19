export const userSchema = {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name:'walletAddress',
            type: 'string',
            title: 'Wallet Address',
        },
        {
            name: 'profileImage',
            type: 'string',
            title: 'Profile Image',
        },
    ]
}