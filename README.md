# React Native Dev Docs

- This repo is created to follow the React Native Development Guide.

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: React Native - Core Components

### Core Components And APIs

**1. ActivityIndicator**

- ActivityIndicator displays a circular loading indicator.

```js
<ActivityIndicator />
<ActivityIndicator size="large" />
<ActivityIndicator size="small" color="#0000ff" />
<ActivityIndicator size="large" color="#00ff00" />
```

**Props for `ActivityIndicator` component:**

- Inherits `View` props.

| Prop Name          | Prop Type       | Default Value | Value (E.G.) | Requirement |
| :----------------- | :-------------- | :------------ | :----------- | ----------- |
| `animating`        | `bool`          | `true`        | `true`       | `optional`  |
| `color`            | `color`         | `null`        | `'#999999'`  | `optional`  |
| `hidesWhenStopped` | `bool`          | `true`        | `true`       | `optional`  |
| `size`             | `enum - number` | `small`       | `large`      | `optional`  |

**2. Button**

- A basic button component that should render nicely on any platform. Supports a minimal level of customization.

| Prop Name               | Prop Type                     | Default Value | Value (E.G.) | Requirement |
| :---------------------- | :---------------------------- | :------------ | :----------- | ----------- |
| `onPress`               | `({nativeEvent: PressEvent})` | `-`           | `-`          | `required`  |
| `title`                 | `string`                      | `-`           | `-`          | `required`  |
| `accessibilityLabel`    | `string`                      | `-`           | `-`          | `optional`  |
| `accessibilityLanguage` | `string`                      | `-`           | `-`          | `optional`  |
| `accessibilityActions`  | `array`                       | `-`           | `-`          | `optional`  |
| `onAccessibilityAction` | `function`                    | `-`           | `-`          | `optional`  |
| `color`                 | `color`                       | `'#2196F3'`   | `'#007AFF'`  | `optional`  |
| `disabled`              | `bool`                        | `false`       | `true`       | `optional`  |
| `hasTVPreferredFocus`   | `bool`                        | `false`       | `true`       | `optional`  |
| `nextFocusDown`         | `number`                      | `-`           | `-`          | `optional`  |
| `nextFocusForward`      | `number`                      | `-`           | `-`          | `optional`  |
| `nextFocusLeft`         | `number`                      | `-`           | `-`          | `optional`  |
| `nextFocusRight`        | `number`                      | `-`           | `-`          | `optional`  |
| `nextFocusUp`           | `number`                      | `-`           | `-`          | `optional`  |
| `testId`                | `string`                      | `-`           | `-`          | `optional`  |
| `touchSoundDisabled`    | `boolean`                     | `-`           | `-`          | `optional`  |

```js
<Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
```

**Props for `View` component:**

**3. FlatList**
**4. Image**
**5. ImageBackground**
**6. KeyboardAvoidingView**
**7. Modal**
**8. Pressable**
**9. RefreshControl**
**10. ScrollView**
**11. SectionList**
**12. StatusBar**
**13. Switch**
**14. Text**
**15. TextInput**
**16. TouchableHighlight**
**17. TouchableOpacity**
**18. TouchableWithoutFeedback**
**19. View**
**20. VirtualizedList**

### Android Components

### iOS Components

### Props

### Object Types

## Step 2: React Native - APIs
