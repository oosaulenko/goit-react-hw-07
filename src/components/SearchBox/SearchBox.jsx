import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice.js';

export default function SearchBox() {
    const dispatch = useDispatch();
    const filterValue = useSelector(selectNameFilter);

    return (
        <div className={css.filter}>
            <label htmlFor="filter">Find contacts by name</label>
            <input
                type="text"
                name="search"
                id="filter"
                value={filterValue}
                onChange={(e) => dispatch(changeFilter(e.target.value))}
            />
        </div>
    )
}