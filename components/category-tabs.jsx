import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { categoryActions } from '../redux/store/actions/CategoryActions';

const CategoryTabs = (props) => {
  const { onChangeTab } = props;
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categoryReducer);

  useEffect(() => {
    dispatch(categoryActions.getCategoriesAction())
  }, [dispatch])

  const handleClickTab = (category) => {
    onChangeTab(category)
  }

  return (
    <div className="category-tabs-container">
      <ul className="menu-categories">
        {
          categories && categories.map(c => {
            return (
              <li key={c.id} className="item-menu-category" onClick={() => handleClickTab(c)}>
                {c.name}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

CategoryTabs.propTypes = {
  onChangeTab: PropTypes.func.isRequired
}

export default CategoryTabs;