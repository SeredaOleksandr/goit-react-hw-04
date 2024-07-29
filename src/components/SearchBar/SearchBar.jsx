import { Formik, Form, Field } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';
import s from './SearchBar.module.css';
import { CiSearch } from 'react-icons/ci';

const SearchBar = ({ onSubmit }) => {
  const initialValues = {
    searchQuery: '',
  };

  const validationSchema = Yup.object({
    searchQuery: Yup.string().required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (values.searchQuery.trim() === '') {
      toast.error('Please enter a search query', {
        duration: 2000,
      });
    } else {
      onSubmit(values.searchQuery);
      resetForm();
    }
  };

  return (
    <header className={s.header}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <Field
            type="search"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={s.input}
          />
          <button className={s.button} type="submit">
            <CiSearch size="22px" />
          </button>
        </Form>
      </Formik>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;
