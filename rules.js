let story;
function startStory(text) {
  //Below is how you define a global variable
  /*global jsyaml*/
  story = jsyaml.load(text);
  return {
    title: story.Title,
    initialScene: story.Start
  };
}

function startScene(sceneName) {
  let scene = story.Scenes[sceneName];

  return {
    imageUrl: scene.ImageURL,
    caption: scene.Caption,
    choices: scene.Choices
  };
}
