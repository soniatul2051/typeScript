type User = {
    id: string;
    username: string;
}
type Users = Record<string, User>;

const users: Users = {
    'gfaf1': {
        id: 'gfaf11',
        username: 'John'
    },
    'gdgdf2': {
        id: 'gdgdf2',
        username: 'Jane'
    }
}