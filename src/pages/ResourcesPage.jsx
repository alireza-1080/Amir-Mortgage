import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import { useDispatch } from 'react-redux';
import { reset_userApplicationData } from '../redux/userApplicationDataSlicer';
import { updateRoute } from '../redux/routingSlicer';
import { resetProgressBar } from '../redux/progressBarSlicer';
import { resetFormStates } from '../redux/formStatesSlicer';

function ResourcesPage() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(reset_userApplicationData());
    dispatch(updateRoute("Resources"));
    dispatch(resetProgressBar());
    dispatch(resetFormStates())
  }, [])

  return (
    <>
      <Header />
      Resources Page
    </>
  )
}

export default ResourcesPage