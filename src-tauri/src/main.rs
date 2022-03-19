#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::{CustomMenuItem, Menu, MenuEntry, MenuItem, Submenu};

fn main() {
  let ctx = tauri::generate_context!();
  let tauri_app = tauri::Builder::default().menu(Menu::with_items([
    #[cfg(target_os = "macos")]
    MenuEntry::Submenu(Submenu::new(
      &ctx.package_info().name,
      Menu::with_items([
        MenuItem::About(ctx.package_info().name.clone()).into(),
        MenuItem::Separator.into(),
        MenuItem::Services.into(),
        MenuItem::Separator.into(),
        MenuItem::Hide.into(),
        MenuItem::HideOthers.into(),
        MenuItem::ShowAll.into(),
        MenuItem::Separator.into(),
        MenuItem::Quit.into(),
      ]),
    )),
    MenuEntry::Submenu(Submenu::new(
      "Edit",
      Menu::with_items([
        MenuItem::Undo.into(),
        MenuItem::Redo.into(),
        MenuItem::Separator.into(),
        MenuItem::Cut.into(),
        MenuItem::Copy.into(),
        MenuItem::Paste.into(),
        #[cfg(not(target_os = "macos"))]
        MenuItem::Separator.into(),
        MenuItem::SelectAll.into(),
      ]),
    )),
    MenuEntry::Submenu(Submenu::new(
      "Window",
      Menu::with_items([MenuItem::Minimize.into(), MenuItem::Zoom.into()]),
    )),
    // You should always have a Help menu on macOS because it will automatically
    // show a menu search field
    MenuEntry::Submenu(Submenu::new(
      "Help",
      Menu::with_items([CustomMenuItem::new("Learn More", "Learn More").into()]),
    )),
  ]));

  tauri_app
    .run(ctx)
    .expect("error while running tauri application");
}
