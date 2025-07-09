export async function Delete_by_ID(id, url) {
    try {
      const response = await fetch(`${url}?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`Ошибка при удалении: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Удалено успешно:', data);
      return data;
    } catch (error) {
      console.error('Ошибка:', error);
      throw error;
    }
  }
  