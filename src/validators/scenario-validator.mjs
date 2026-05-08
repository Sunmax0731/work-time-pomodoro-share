export function validateItem(item, index) {
  const errors = [];
  const warnings = [];
  if (!item || typeof item !== 'object') return { index, status: 'fail', errors: ['item must be an object'], warnings };
  if (!String(item.title ?? '').trim()) errors.push('title is required');
  if (!String(item.action ?? '').trim()) errors.push('action is required');
  if (Array.isArray(item.warnings)) warnings.push(...item.warnings.map(String));
  if (item.severity === 'warning' && warnings.length === 0) warnings.push('warning severity requires manual review');
  return { index, status: errors.length ? 'fail' : warnings.length ? 'warning' : 'pass', errors, warnings };
}
