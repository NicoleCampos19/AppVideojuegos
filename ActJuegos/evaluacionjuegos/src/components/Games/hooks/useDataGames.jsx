import { useEffect, useState } from "react";
import { showSuccess, showError } from "../../utils/Toaster";

const API_URL = "https://retoolapi.dev/9mznW9/videojuegos"

const useDataCourss = () => {
  const [dataCourses, setDataCourses] = useState([]);

  // Obtener todos los cursos
  const getCourses = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch courses");
      const data = await response.json();
      setDataCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      showError("Error al obtener los cursos");
    }
  };

  // Obtener un curso por ID
  const getCourseById = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) throw new Error("Failed to fetch course");
      const data = await response.json();
      return { data, error: null };
    } catch (error) {
      console.error("Error fetching course:", error);
      return { data: null, error: "Error al obtener el curso" };
    }
  };

  // Crear un nuevo curso
  const createCourse = async (newCourse) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCourse),
      });
      if (!response.ok) throw new Error("Error al crear el curso");

      showSuccess("Curso creado exitosamente");
      getCourses();
    } catch (error) {
      console.error("Error creando curso:", error);
      showError("Error al crear el curso");
    }
  };

  // Actualizar un curso existente
  const updateCourse = async (id, updatedCourse) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCourse),
      });
      if (!response.ok) throw new Error("Error al actualizar el curso");

      showSuccess("Curso actualizado correctamente");
      getCourses();
    } catch (error) {
      console.error("Error actualizando curso:", error);
      showError("Error al actualizar el curso");
    }
  };

  // Eliminar un curso
  const deleteCourse = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Error al eliminar el curso");

      showSuccess("Curso eliminado correctamente");
      getCourses();
    } catch (error) {
      console.error("Error eliminando curso:", error);
      showError("Error al eliminar el curso");
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return {
    dataCourses,
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse,
  };
};

export default useDataCourses;