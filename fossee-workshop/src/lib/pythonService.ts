import { loadPyodide, type PyodideInterface } from "pyodide";

let pyodideInstance: PyodideInterface | null = null;

export async function getPyodide() {
  if (pyodideInstance) return pyodideInstance;

  pyodideInstance = await loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.1/full/",
  });
  
  return pyodideInstance;
}

export async function runPython(code: string) {
  const py = await getPyodide();
  try {
    // Redirect stdout to capture print statements
    await py.runPythonAsync(`
import sys
import io
sys.stdout = io.StringIO()
    `);
    
    const result = await py.runPythonAsync(code);
    
    const stdout = await py.runPythonAsync("sys.stdout.getvalue()");
    
    return {
      result: result?.toString() || "",
      stdout: stdout,
      error: null
    };
  } catch (err: any) {
    return {
      result: null,
      stdout: null,
      error: err.message
    };
  }
}
