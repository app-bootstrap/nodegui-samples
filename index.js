'use strict';

const {
  QMainWindow,
  QWidget,
  QLabel,
  FlexLayout
} = require('@nodegui/nodegui');

console.log(process.versions.qode, process.versions);

const win = new QMainWindow();

const centralWidget = new QWidget();
centralWidget.setObjectName('app');
const rootLayout = new FlexLayout();
centralWidget.setLayout(rootLayout);

const label = new QLabel();
label.setText('hello');

rootLayout.addWidget(label);
win.setCentralWidget(centralWidget);
win.setStyleSheet(
  `
    #app {
      background-color: grey;
    }
  `
);
win.show();

global.win = win;
