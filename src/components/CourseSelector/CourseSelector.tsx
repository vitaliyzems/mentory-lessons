import type { CourseSelectorProps } from '../../types';
import Panel from '../Panel/Panel';
import CourseListView from '../CourseListView/CourseListView';

function CourseSelector({
  courses,
  ids,
  onSelect,
  onToggle,
}: CourseSelectorProps) {
  return (
    <Panel title="Cписок курсов">
      <CourseListView
        items={courses}
        ids={ids}
        emptyText="Курсов не найдено"
        onSelect={onSelect}
        onToggle={onToggle}
      />
    </Panel>
  );
}

export default CourseSelector;
