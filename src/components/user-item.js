import {app} from '../app';
import UserTemplate from 'html!./template.html';

app.directive('userItem', () => {
  return {
    template: UserTemplate
  };
});
