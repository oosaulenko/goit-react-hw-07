import './App.css'

import { useEffect } from 'react';
import Error from "./components/Error/Error";
import Loader from "./components/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {selectContactsError, selectContactsLoading} from "./redux/contactsSlice.js";
import {fetchContacts} from "./redux/contactsOps.js";

import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";

function App() {
    const dispatch = useDispatch();
    const loading = useSelector(selectContactsLoading);
    const isError = useSelector(selectContactsError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            {loading && <Loader />}
            {isError && <Error />}
            {!loading && !isError && <ContactList />}
        </div>
    )
}

export default App
