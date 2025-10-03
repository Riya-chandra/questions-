const users=[
    {
        id:1,name:"riya"
    },
    {
        id:2,name:"sonalli"
    }
];

function UserListuse(){
    return (
<ul>
    {users.map(user=><li
        key={user.id}>
            {user.name}
    </li>)}
</ul>
    )
}