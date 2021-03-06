import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Create from "./create/create";
import BookDetails from "./details/book-details";
import Edit from "./edit/edit";
import Delete from "./delete/delete";

const BookPaths = (properties) => {
    const { path } = properties.match;

    return (
        <Switch>
            <Route path={`${path}/details/:id`} render={(props) => <BookDetails books={properties.books} {...props}/>}/>
            <Route path={`${path}/create`} render={(props) => properties.isAdmin
                ? <Create {...props} createBook={properties.createBook}/>
                : <Redirect to="/"/>
            }/>
            <Route path={`${path}/edit/:id`} render={(props) => properties.isAdmin
                ? <Edit {...props} books={properties.books} editBook={properties.editBook}/>
                : <Redirect to="/"/>
            }/>
            <Route path={`${path}/delete/:id`} render={(props) => properties.isAdmin
                ? <Delete {...props} books={properties.books} deleteBook={properties.deleteBook}/>
                : <Redirect to="/"/>
            }/>
        </Switch>
    );
};

export default BookPaths;