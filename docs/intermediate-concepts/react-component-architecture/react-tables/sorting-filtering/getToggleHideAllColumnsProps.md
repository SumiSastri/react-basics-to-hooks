To show and hide columns the hook `getToggleHideAllColumnsProps` is used in a checkbox.

The difficult part of this feature is the CSS and the notriously difficult checkbox that needs to be styled. The checkbox height and width are dependent on the label. Different length labels result in a a mixed size checkbox with some rendering very small in height and width while others render a larger size.

The method `...column.getToggleHiddenProps()` needs to be called in the jsx input tag
