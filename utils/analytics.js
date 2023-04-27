export const screenNames = {
  home: "Home",
  privacyPolicy: "PrivacyPolicy",
  activity: "Activity",
  classes: "Class",
  timeTable: "Calendar",
  myBag: "My Bag",
  reports: "Reports",
  liveClass: "LiveClass",
  classSubject: "ClassSubject",
  lecture: "Lecture",
  cameraScreen: "CameraScreen",
  nonLiveClass: "NonLiveClass",
  post: "Post",
  notebook: "Notebook",
  editNotebook: "Edit Notebook",
  containerWithHeader: "ContainerWithHeader",
  futureClass: "Future Class",
  userProfile: "Profile",
  createPassword: "Create Password",
  quizOverPage: "Quiz Over",
  performance: "My Performance",
  quizNavigator: "Quiz Navigator",
  submitEndQuiz: "SubmitEndQuiz",
  quizPaused: "QuizPaused",
  quizImagePreview: "Quiz Image Preview",
  quiz: "Quiz",
  assignment: "Assignment",
  whiteboardPreview: "Whiteboard Preview",
  curriculumPreview: "Curriculum Preview",
  fileViewer: "File Viewer",
  forceUpdate: "Force Update",
};

export const classSubjectTabs = {
  curriculum: "curriculum",
  pinboard: "pinboard",
  schedule: "schedule",
  resources: "resources",
  quizzes: "quizzes",
  assignment: "assignment",
};

export const bottomTabNames = {
  activity: "Activity",
  timeTable: "Calendar",
  classes: "Class",
  myBag: "My Bag",
  reports: "Reports",
};

export const getScreenNameFromState = (state) => {
  const { routes = [] } = state;
  const numRoutes = routes.length;
  const currentScreen = routes[numRoutes - 1];
  return currentScreen.name;
};
