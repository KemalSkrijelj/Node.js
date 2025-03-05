import { getAllInventory } from "../services/InventoryServices"
export default async function InventoryController(page: number, pageSize:number){
  if (page.method === 'GET') {
    try {
      const inventory = await getAllInventory()  
      pageSize.status(200).json(inventory)  
    } catch (error) {
      pageSize.status(500).json({ message: 'Failed to fetch inventory' })  
    }
  } else {
    page.status(405).json({ message: 'Method Not Allowed' })  
  }
}