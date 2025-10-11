# Proposed Maintenance Tasks

## Typographical Fix
- **Issue**: The button label "Potvrdi Izbor" in `index.html` mixes capitalization styles and should read "Potvrdi izbor" to follow sentence-case button labels used elsewhere in the UI.
- **Task**: Update the button text inside `index.html` line 15 to "Potvrdi izbor" and ensure the same text is reflected wherever referenced.

## Bug Fix
- **Issue**: `script.js` lines 77-87 attach an extra `novaIgraBtn` listener outside the DOMContentLoaded scope, referencing variables that are out of scope. This throws a `ReferenceError` as soon as the script loads, preventing the app from initializing.
- **Task**: Remove the duplicate listener outside the DOMContentLoaded callback or relocate the logic inside the existing handler to keep all references in scope.

## Comment/Documentation Correction
- **Issue**: The trailing comment `// ... (ostatak koda je isti)` in `script.js` line 89 implies truncated content, which is misleading now that the file already contains the complete logic.
- **Task**: Delete or replace the comment with an accurate description of the code block.

## Test Improvement
- **Issue**: There are no automated tests verifying the loto draw logic, such as ensuring seven unique numbers are drawn and the correct hit count is displayed.
- **Task**: Introduce a lightweight test (e.g., using Jest) that imports the core logic from `script.js` and asserts that `izvuciBroj` (or a refactored exportable helper) draws seven unique numbers and updates the hit counter appropriately.
