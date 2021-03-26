import React from 'react';

class Users extends React.Component {
    state = {
        users: [],
        newusers: [],
        searchValue: ''
    }
    componentDidMount() {
        fetch('https://reqres.in/api/users').then(res => res.json()).then(res => {
            console.log(res.data);
            this.setState({ users: res.data, newusers: res.data });
        });
    }
    handleSearch = (e) => {
        let searchValue = e.target.value.toLowerCase();
        const { newusers } = this.state;
        if (searchValue.length > 3) {
            let users = newusers.filter(item => {
                return item.first_name.toLowerCase().includes(searchValue) || item.last_name.toLowerCase().includes(searchValue);
            });
            this.setState({ searchValue: e.target.value, users: users })
        } else {
            this.setState({ searchValue: e.target.value, users: newusers })
        }
    }
    render() {
        const { users, searchValue } = this.state;
        return (
            <>
                <h2>User Table</h2>
                <input onChange={(e) => { this.handleSearch(e) }} value={searchValue} placeholder="Search user by first/last name"></input>
                {users.length > 0 ? <table>
                    <thead>
                        <th>Id</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Image</th>
                    </thead>
                    <tbody>
                        {users.map((item, index) => {
                            return <tr key={item.id}>
                                <th>{item.id}</th>
                                <th>{item.email}</th>
                                <th>{item.first_name}</th>
                                <th>{item.last_name}</th>
                                <th><img src={item.avatar} alt="user Avartar"></img></th>
                            </tr>
                        })

                        }
                    </tbody>
                </table> : <h4>No Users found</h4>}
            </>
        );
    }
}

export default Users;
