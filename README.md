# Terminal Notes

Allows you to take notes from your terminal and saving them by day on a specified folder.
This will keep track of all the notes you add during the day and update the same note file.


# Instructions
A soon you install the node module

- Specify a folder path:

``` notes -c /my/folder/path ```

- then add your first note.

``` notes -t "my first note" ```

- view specific file by date

``` notes -o "16-01-2022" ```


# Things I want to do later on:
- Seach folder using words (notes -s "search word")
- List Search Results on a table by date
- Open File by date on predefined text editor. (notes -o "16-01-2022" -e vscode)
- Backup text files on a github.com - gitlab.com periodically. (notes --backup)