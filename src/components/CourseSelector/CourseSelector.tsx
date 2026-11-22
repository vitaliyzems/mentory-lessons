import type { CourseSelectorProps } from '../../types';
import Panel from '../Panel/Panel';
import CourseListView from '../CourseListView/CourseListView';

function CourseSelector({ courses, onSelect, ids }: CourseSelectorProps) {
  return (
    <Panel title="Cписок курсов">
      <CourseListView
        items={courses}
        ids={ids}
        emptyText="Курсов не найдено"
        onSelect={onSelect}
      />
    </Panel>
  );
}

export default CourseSelector;
