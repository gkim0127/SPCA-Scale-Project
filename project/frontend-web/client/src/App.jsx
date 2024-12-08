import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TopNavPageLayout from './pages/TopNavPageLayout'
import UserProfilePage from './pages/UserProfilePage'
import AllDogsPage from './pages/AllDogsPage'
import AddEditDogPage from './pages/AddEditDogPage'


export default function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<TopNavPageLayout />}>
                    <Route index element={<Navigate to="/userprofile" />} />
                    <Route path="userprofile">
                        <Route index element={<UserProfilePage />} />
                    </Route>

                    <Route path="alldogs">
                        <Route index element={<AllDogsPage />} />
                        <Route path="add" element={<AddEditDogPage />} />
                        <Route path="edit" element={<AddEditDogPage />} />
                    </Route>
                </Route>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
            </Routes>
        </React.Fragment>
    )
}
