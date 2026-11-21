import { memo } from 'react';
import type { CourseSelectorProps } from '../../types';
import Panel from '../Panel/Panel';
import CourseListView from '../CourseListView/CourseListView';

const CourseSelector = memo(
  ({ courses, onSelect, options }: CourseSelectorProps) => {
    console.log('CourseSelector render');

    return (
      <Panel title="Cписок курсов">
        <CourseListView
          items={courses}
          emptyText="Курсов не найдено"
          onSelect={onSelect}
          options={options}
        />
      </Panel>
    );
  },
);

export default CourseSelector;
