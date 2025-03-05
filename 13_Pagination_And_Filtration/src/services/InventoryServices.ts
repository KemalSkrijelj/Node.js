import prisma from "../prisma" 
export async function getAllInventory(page: number, pageSize: number) {
  try {
    const inventoryItems = await prisma.inventory.findMany()
    return inventoryItems
  } catch (error) {
    console.error('Error fetching inventory:', error)
    throw new Error('Failed to fetch inventory')
  }
}
